var lagi = true
var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'b') {

     while (lagi === true) {
  var nama = prompt('Dak kenal maka Dak nek kek\n(Along isi nama ka terlebih dahulu)');
  alert('Halo ' +nama +' salam kenal🖐️');
  alert('Selepas ini ka hendak tingok Mading "Istimewanya Negeri Laskar Pelangi🌈" '+ " " + nama);
  alert('Penasaran kan ' +nama + "?🤔" );
  alert('Dan semoga selepas membaca web ini, wawasan ka semakin bertambah😎');
  
  lagi = confirm('Kawa mace informasinya agik?');

}


     localStorage.setItem('alerted','b');
    }


    