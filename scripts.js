$(function(){
  let $whatsappUrl = 'https://api.whatsapp.com/send?phone=55'
  $('#input-phone').mask('(00) 999999999')
  $( "#input-phone" ).on( "keyup", function() {
    $phoneNumber = $(this).cleanVal()
    if ($phoneNumber.length > 9) {
      $('#open-whatsapp-btn').attr("href", `${$whatsappUrl}${$phoneNumber}`)
      $('#open-whatsapp-btn').removeClass('disabled-link')
    } else {
      $('#open-whatsapp-btn').attr("href", '')
      $('#open-whatsapp-btn').addClass('disabled-link') 
    }
  })
})
