function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  // SweetAlert2를 사용하여 팝업을 표시합니다
  Swal.fire({
    title: '추첨 완료!',
    html: `추첨된 번호는 <strong>${numbers.sort((a, b) => a - b).join(', ')}</strong> 입니다.`,
    icon: 'success',
    confirmButtonText: '확인'
  });

  // 결과를 HTML에 출력합니다
  const numbersDiv = document.getElementById('numbers');
  numbersDiv.innerHTML = numbers.sort((a, b) => a - b).join(', ');
}

