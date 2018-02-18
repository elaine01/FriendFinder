$('#submit').on('click', function() {
      event.preventDefault();

      let q1 = $('#q1').val().trim();
      let q2 = $('#q2').val().trim();
      let q3 = $('#q3').val().trim();
      let q4 = $('#q4').val().trim();
      let q5 = $('#q5').val().trim();
      let q6 = $('#q6').val().trim();
      let q7 = $('#q7').val().trim();
      let q8 = $('#q8').val().trim();
      let q9 = $('#q9').val().trim();
      let q10 = $('#q10').val().trim();

      let friendAdded = {
          name: $('#name').val().trim(),
          photo: $('#photo').val().trim(),
          scores: [
            Number(q1),
            Number(q2),
            Number(q3),
            Number(q4),
            Number(q5),
            Number(q6),
            Number(q7),
            Number(q8),
            Number(q9),
            Number(q10),
          ]
        }
      console.log('survey.html friendAdded ', friendAdded);

      const currentURL = window.location.origin;


      let success = function(data) {
        if (data == true) {
          console.log("Friend added");
        } if (data == false) {
          console.log("No friend added");
        }
      };

      $.ajax({
        type: "POST",
        url: "api/friends",
        contentType: "application/json",
        data: JSON.stringify(friendAdded),
        success: success,
      }).done(function(data) {
        $('#modalName').html(data.matchName);
        let img = $('<img>').attr('src', data.matchImage);
        $('#modalPhoto').append(img);
        $('#myModal').modal({
          keyboard: false,
          backdrop: 'static' 
        });
      });
        
        // clear out the form after user submits
      $('#name').val("");
      $('#photo').val("");
      $('#q1').val("");
      $('#q2').val("");
      $('#q3').val("");
      $('#q4').val("");
      $('#q5').val("");
      $('#q6').val("");
      $('#q7').val("");
      $('#q8').val("");
      $('#q9').val("");
      $('#q10').val("");
      
     });

    // removes previous best match when user closes modal
    $('#modalClose').on('click', function() {
      console.log("here");
      $('#modalName').empty();
      $('#modalPhoto').empty();
    });
    $('#closex').on('click', function() {
      console.log("here");
      $('#modalName').empty();
      $('#modalPhoto').empty();
    });