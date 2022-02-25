// $(function() {
   
// });

var result_loc = 'result'

$("#btn").on('click',function() {
    var txt = $("#fname").val();

    $.ajax(
      {
        type: 'GET',
        url: location.href + result_loc,
        data: {'text':txt}, 
        success: function(result){
          if(result>0){
            $(".result").html(`Your text contain ${result} vowel(s)`);
          }
          else{
            $(".result").html(`Please enter a text`);
          }
      }});

  });