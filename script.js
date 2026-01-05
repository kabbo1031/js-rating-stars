const stars = document.querySelectorAll('.rating span');
const result = document.getElementById('result');

stars.forEach(star=>{
  star.addEventListener('click', ()=>{
    const val = star.dataset.val;
    result.innerText = 'Rating: ' + val;

    stars.forEach(s=>{
      s.classList.toggle('active', s.dataset.val <= val);
    });
  });
});
