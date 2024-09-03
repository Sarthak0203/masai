
document.getElementById('main-heading').textContent = 'DOM Manipulation is Awesome!';


const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}


document.getElementById('main-image').src = 'https://via.placeholder.com/200';


document.querySelector('.container').style.backgroundColor = '#f0f0f0';


const containerParagraphs = document.querySelectorAll('.container p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Text has been updated!';
});