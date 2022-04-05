/*************************************
*  Logout.Js                     
*                                  
*  Created by Ferdy Rahmat R.      
*  on 5 April 2022                
*                                  
*************************************/

$('#logout').on('click', function (e) {
    e.preventDefault();

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Sesi anda saat ini akan dihapus dan Anda harus login kembali untuk menggunakan Aplikasi PeduliDiri. ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Saya Yakin',
        cancelButtonText: 'Tidak, Batalkan',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = $(this).attr('href');
        }
    })
})