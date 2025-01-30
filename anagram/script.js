const inputElement = document.getElementById('input-word');
const infoElement = document.getElementById('info');
const resultWordElement = document.getElementById('result-word');
const resultMeanElement = document.getElementById('result-mean');

const permute = string => {
  const results = [];
  results.push(string);

  const chars = string.split('');
  const n = chars.length;

  const indices = Array.from({ length: n }, (_, i) => i);
  const cycles = Array.from({ length: n }, (_, i) => n - i);

  let i = 0;
  while (i < n) {
    cycles[i]--;
    if (cycles[i] === 0) {
      cycles[i] = n - i;
      i++;
    } else {
      const j = i + cycles[i];
      [indices[i], indices[j]] = [indices[j], indices[i]];

      let permutation = '';
      for (let p = 0; p < n; p++) {
        permutation += chars[indices[p]];
      }
      results.push(permutation);
      i = 0;
    }
  }
  return results;
}

const loadDictionary = async _ => {
  const response = await fetch('dictionary.json');
  const json = await response.json();
  return json.dictionary;
}

const findAnagram = async () => {
  const input = inputElement.value.toLowerCase().trim();
  if (!input) {
    infoElement.innerHTML = '<span style="color: red;">Masukkan kata terlebih dahulu!</span>';
    return;
  }

  const permutations = new Set(permute(input));
  const dictionary = await loadDictionary();

  const anagrams = dictionary.filter(e => permutations.has(e.word.trim()) && e.type === 1);
  const words = new Set(anagrams.map(e => e.word.trim()));

  if (words.size === 0) {
    infoElement.innerHTML = '<span style="color: red;">Kata tidak ditemukan dalam kamus!</span>';
    resultWordElement.innerHTML = '';
    resultMeanElement.innerHTML = '';
    resultMeanElement.style.display = "none";
    return;
  }

  resultMeanElement.style.display = "block"; 
  
  const pesan = `Ditemukan <b>${words.size}</b> dari <b>${permutations.size}</b> permutasi kata di dalam kamus`;
  infoElement.innerHTML = pesan;
  displayResults(words, anagrams);
};



const displayResults = (words, anagrams) => {
  resultWordElement.innerHTML = [...words].map(e => {
    return `<a href="#${e}" style="font-size:2em;color:black">${e}</a>&nbsp;&nbsp;&nbsp;`;
  }).join('');

  const parser = new DOMParser();
  resultMeanElement.innerHTML = anagrams.map(e => {
    const parsedHTML = parser.parseFromString(e.arti, 'text/html').body.textContent;
    return `<div id="${e.word}" style="margin-bottom: 1em"><h3 style="margin: 0; color: red">${e.word}</h3><span>${parsedHTML}</span></div>`;
  }).join('');
};
