const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.array.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

displayList(item => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
});

const setChapterList = () => {
    localStorage.setItem('favBOMList', JSON.stringify(chaptersArray));
};

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('favBOMList'));
}

const deleteChapter = () => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) =>
        item !== chapter);
    setChapterList();
}