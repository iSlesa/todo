$(document).ready( function(){

	var ds = new DataStore(data);
	var lbl = new LabelStore(lab);

	ds.display();

	/* ADD TASK */
		$('#add').click(function(){
			if ($('input[name=checkListItem]').val() === ''){
				alert("Input task");
			}
			else{
				var t =  $('input[name=checkListItem]').val();
				if(!$('select[name=label]').val().length)
					var l = "Default";
				else
					var l = $('select[name=label]').val();
				if($('#date').val().length)
					var r1= $('#date').val()
				else
					var r1 = "0";
				if($('#clock').val().length)
					var r2= $('#clock').val()
				else
					var r2= "0";
		        var toAdd = {
		        				Task: t, 
		        				Label: l,
		        				Remind: [r1,r2],
		        				Done: 0
		        			};

		        ds.addTask(toAdd);
				$('form[name=addTaskForm]').trigger("reset");
	        }
	    });

	/* REMOVE TASK */
		$('table').on("click","td.cross",function(){
			var row = $(this).closest("tr");
			var taskName = row.find('.text').text();
			var label =  row.find('.label').text();
			ds.removeTask(ds.findTask(taskName, label));
			row.remove();
		});

	/* TASK DONE/UNDONE */
		$('table').on("click","td.tick",function(){
			if($(this).find('.check').prop('checked') === true) {
				var tr = $(this).closest('tr');
				var taskName = tr.find('.text').text();
				var label =  tr.find('.label').text();
				ds.done(ds.findTask(taskName, label));
				tr.detach().appendTo($('.done'));
			}
			else{
				var tr = $(this).closest('tr');
				var taskName = tr.find('.text').text();
				var label =  tr.find('.label').text();
				ds.undone(ds.findTask(taskName, label));
				tr.detach().appendTo($('.todo'));
			}
		});

	/* ADD LABEL */
		$('#save').click(function(){
			lbl.addLabel($('input[name="label"]').val(),$('select[name="colorpicker"]').val());
			$('select[name=label]').val($('input[name="label"]').val());
			$('input[name="label"]').val("");
		});

	/* REMAINDER TOGGLE */
		$('#remainder').click(function(){
		    if($(this).prop('checked') === true){
				$('#date').show();
				$('#clock').show();
		    }
		    else {
		    	$('#date').hide();
		        $('#clock').hide();
		    }
		});

	/* DATEPICKER */	
		var date_input=$('input[name="date"]'); //our date input has the name "date"
	        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	        date_input.datepicker({
	            format: 'mm/dd/yyyy',
	            container: container,
	            todayHighlight: true,
	            autoclose: true,
	        });

	/* CLOCKPICKER */	  
		var input = $('input[name="clock"]');
		input.clockpicker({
		    autoclose: true
		});

	/* COLORPICKER */

		var color = $('select[name="colorpicker"]');
		color.simplecolorpicker({
			  picker: true
			});

		$('select[name="label"]').on('change',function () {
	        if ($(this).val() == "0") {
	            $('#colorModal').modal({show:"true"});
	        }
	    });

});
