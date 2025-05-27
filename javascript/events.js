document.addEventListener('DOMContentLoaded', () => {
    // анимация первого ряда изображений
    let firstRow = document.querySelector('#first_row')
    firstRow.addEventListener('mouseover', newFirstRow)
    firstRow.addEventListener('mouseout', oldFirstRow)
  
    function newFirstRow() {
      document.getElementById('Butterfly1').src = 'images/Butterfly1_colored.png'
      document.getElementById('Butterfly2').src = 'images/Butterfly2_colored.png'
      document.getElementById('Butterfly3').src = 'images/Butterfly3_colored.png'
      document.getElementById('Butterfly1_double').src = 'images/Butterfly1_colored.png'
      document.getElementById('Butterfly2_double').src = 'images/Butterfly2_colored.png'
      document.getElementById('Butterfly3_double').src = 'images/Butterfly3_colored.png'
    }
  
    function oldFirstRow() {
      document.getElementById('Butterfly1').src = 'images/Butterfly1.png'
      document.getElementById('Butterfly2').src = 'images/Butterfly2.png'
      document.getElementById('Butterfly3').src = 'images/Butterfly3.png'
      document.getElementById('Butterfly1_double').src = 'images/Butterfly1.png'
      document.getElementById('Butterfly2_double').src = 'images/Butterfly2.png'
      document.getElementById('Butterfly3_double').src = 'images/Butterfly3.png'
    }
     // анимация второго ряда изображений
  let secondRow = document.querySelector('#second_row')
  secondRow.addEventListener('mouseover', newSecondRow)
  secondRow.addEventListener('mouseout', oldSecondRow)

  function newSecondRow() {
    document.getElementById('Word1').src = 'images/Word1_colored.png'
    document.getElementById('Word2').src = 'images/Word2_colored.png'
    document.getElementById('Word3').src = 'images/Word3_colored.png'
    document.getElementById('Word1_double').src = 'images/Word1_colored.png'
    document.getElementById('Word2_double').src = 'images/Word2_colored.png'
    document.getElementById('Word3_double').src = 'images/Word3_colored.png'
  }

  function oldSecondRow() {
    document.getElementById('Word1').src = 'images/Word1.png'
    document.getElementById('Word2').src = 'images/Word2.png'
    document.getElementById('Word3').src = 'images/Word3.png'
    document.getElementById('Word1_double').src = 'images/Word1.png'
    document.getElementById('Word2_double').src = 'images/Word2.png'
    document.getElementById('Word3_double').src = 'images/Word3.png'
  }

  // анимация третьего ряда изображений
  let thirdRow = document.querySelector('#third_row')
  thirdRow.addEventListener('mouseover', newThirdRow)
  thirdRow.addEventListener('mouseout', oldThirdRow)

  function newThirdRow() {
    document.getElementById('Monster1').src = 'images/Monster1_colored.png'
    document.getElementById('Monster2').src = 'images/Monster2_colored.png'
    document.getElementById('Monster3').src = 'images/Monster3_colored.png'
    document.getElementById('Monster1_double').src =
      'images/Monster1_colored.png'
    document.getElementById('Monster2_double').src =
      'images/Monster2_colored.png'
    document.getElementById('Monster3_double').src =
      'images/Monster3_colored.png'
  }

  function oldThirdRow() {
    document.getElementById('Monster1').src = 'images/Monster1.png'
    document.getElementById('Monster2').src = 'images/Monster2.png'
    document.getElementById('Monster3').src = 'images/Monster3.png'
    document.getElementById('Monster1_double').src = 'images/Monster1.png'
    document.getElementById('Monster2_double').src = 'images/Monster2.png'
    document.getElementById('Monster3_double').src = 'images/Monster3.png'
  }
})