const project = {
  '10000': {
    b_price: '600',
    s_price: '1,600'
  },
  '15000': {
    b_price: '850',
    s_price: '1,850'
  },
  '20000': {
    b_price: '1,000',
    s_price: '2,000'
  },
  '25000': {
    b_price: '1,100',
    s_price: '2,100'
  },
  '>25000':{
    b_price: '1,500',
    s_price: '2,500'
  }
}

let list_str = ''
for(const key of Object.keys(project)) {
  list_str === '' ? list_str += `<li class="is-active" onclick="projectToggle(\'${key}\', event)">${key}位</li>` : list_str += `<li onclick="projectToggle(\'${key}\', event)">${key}位</li>`
}

document.querySelector('#project-list').innerHTML = list_str

function projectToggle(key, e){
  document.querySelector('.is-active').classList.remove('is-active')
  e.target.classList.add('is-active')
  document.querySelector('#b_user').innerHTML = `${key}<sub>位`
  document.querySelector('#b_price').innerHTML = `${project[key]['b_price']}<sub>TWD</sub>`
  document.querySelector('#s_user').innerHTML = `${key}<sub>位`
  document.querySelector('#s_price').innerHTML = `${project[key]['s_price']}<sub>TWD</sub>`
}

function faqToggle(qNum){
  if(!document.getElementById(`q${qNum}`).classList.contains('is-open')){
    document.getElementById(`q${qNum}`).classList.add('is-open');
    document.getElementById(`a${qNum}`).classList.add('is-open');
  }else{
    document.getElementById(`q${qNum}`).classList.remove('is-open');
    document.getElementById(`a${qNum}`).classList.remove('is-open');
  }
}