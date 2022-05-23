const comments = [
  {
    img: 'user01.jpg',
    content: '原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。',
    company: '清心寡慾設計公司',
    user: 'Lina 執行長',
    star: 5
  },
  {
    img: 'user02.jpg',
    content: '團隊很積極的協助行銷追蹤，針對機器人進行優化，讓我們一個月內提高10000個追蹤者，客戶體驗回饋很正面！',
    company: 'subwhat 行銷公司',
    user: 'Zoe 活動長',
    star: 5
  },
  {
    img: 'user03.jpg',
    content: '經營了好久的IG，一直無法提升粉絲數，和團隊合作後，才知道可以用聊天機器人玩這麼豐富的行銷活動！太讚拉～',
    company: '油土伯',
    user: 'HowBig',
    star: 5
  },
  {
    img: 'user01.jpg',
    content: '你要不要聽聽看你們家機器人剛剛在講什麼?',
    company: 'ＱＱㄋㄟㄋㄟ好喝到咩噗茶',
    user: '喬瑟夫。喬斯達',
    star: 2
  },
  {
    img: 'user02.jpg',
    content: '我覺得不錯，但是阿公說機器人喜勒工啥毀攏跨謀，加個台語語音好嗎??',
    company: '早安美滋滋',
    user: '阿土伯的孫女',
    star: 4
  },
  {
    img: 'user03.jpg',
    content: '原來聊天機器人可以這麼傲嬌！真是斯巴拉西。',
    company: '縱慾過度物流公司',
    user: 'Paul 經理',
    star: 5
  },
  {
    img: 'user03.jpg',
    content: '唉呦，不錯，這個屌!',
    company: '傑威洱生技公司',
    user: '傑倫',
    star: 5
  },
  {
    img: 'user02.jpg',
    content: '傑尼~傑尼~傑尼~傑尼~傑尼~傑尼~閃電!!!!!!!!!!',
    company: '剛被爆破的真新鎮消防隊',
    user: '龜龜他偏頭痛',
    star: 4
  },
  {
    img: 'user01.jpg',
    content: '你們的機器人昨天答應我的求婚了，請問我什麼時候才可以去接她回家?',
    company: '璦淂JO肆倪',
    user: '愛新覺羅·醬爆',
    star: 5
  },
  {
    img: 'user02.jpg',
    content: '團隊很積極的協助追討，針對機器人進行優化，讓我們一個月內提高100個追蹤者，客戶體驗回饋很正面！',
    company: 'SAYWHAT 討債集團',
    user: 'ZoeNeo 小隊長',
    star: 4
  },
  {
    img: 'user03.jpg',
    content: '不錯...好用...生意...棒棒...',
    company: '財哥專業檳榔攤',
    user: '財哥',
    star: 5
  },
  {
    img: 'user01.jpg',
    content: '哆啦A夢~~~~~',
    company: 'Forever Six',
    user: '不願透露姓名的葉同學',
    star: 3
  }
]

// 評論當前頁數
let current = 1

// 控制點
const page = Math.floor(comments.length / 3)
let page_str = ''
for(let i = 0 ; i < page; i++) {
  page_str === '' ?  page_str += `<li class="controller is-active" onclick="commentsToggle(${i+1},event)"></li>` : page_str += `<li class="controller" onclick="commentsToggle(${i+1},event)"></li>`
}

let interval = setInterval(()=> {
  current ++
  if(current > 4) current = 1
  autoToggle(current)
},4000)

document.querySelector('#page-viewer').innerHTML = page_str

// 評論
function getComments(page = 1){
const show = comments.slice((page - 1) * 3, page * 3)
let comment_str = ''
for(const item of show){

  comment_str === '' ?  comment_str += `<li>` : comment_str += `<li class="show-on-pad">`
  comment_str += `
    <div class="user-image circle">
      <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/${item.img}" alt="${item.user}">
    </div>
    <p class="text-justify">${item.content}</p>
    <h4>${item.company}</h4>
    <div class="d-flex justify-content-between">
      <small>${item.user}</small>
      <span>
  `

  for(let i = 0; i< item.star; i++){
    comment_str +=`<img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_star.svg" alt="star${i+1}"></img>`
  }

  comment_str +=`
      </span>
    </di>
  </li>
  `
}

document.querySelector('#comment-list').innerHTML = comment_str
}

function commentsToggle(page,e){
  document.querySelector('.is-active').classList.remove('is-active')
  e.target.classList.add('is-active')
  getComments(page)
  current = page
  clearInterval(interval)
  interval = setInterval(()=> {
    current ++
    if(current > 4) current = 1
    autoToggle(current)
  },4000)

}

function autoToggle(page){
  document.querySelector('.is-active').classList.remove('is-active')
  const controller = [...document.getElementsByClassName('controller')]
  controller[page - 1].classList.add('is-active')
  getComments(page)
}





// 直接執行
getComments()