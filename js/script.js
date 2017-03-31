$(document).ready( function(){

	/* Variable definitions */
	todo = [["Do Laundry","Chores"],["Complete Assignments","School Stuff"]];
	done = [["ML Assignments","School Stuff"],["Dance","School Stuff"]];

	function todolist(text, label){
		this.text = text;
		this.label;
	}

	function manager(todolist){
		this.todolist = todolist;

		this.add = function(){
			todo.push(this.todolist);
			if (done.indexOf(todolist) != -1){
				 array.splice(done.indexOf(todolist), 1);
			}
		}

		this.remove = function(){
			done.push(this.todolist);
			if (todo.indexOf(todolist) != -1){
				 array.splice(todo.indexOf(todolist), 1);
			}
		}
	}

	// Load to page
	for(i= 0; i < todo.length; i++){
		$item = $("<tr class='row'> <td class='col-md-5 tick'> <input type='checkbox' class='check'> </td><td class='col-md-6 text'> "+ todo[i][0] + "</td> <td class='col-md-1 cross'> <button class='close'>&times;</button> </td> </tr>");
		$(".todo").append($item);
	}
	
	for(i= 0; i < done.length; i++){
		$item = $("<tr class='row'> <td class='col-md-5 tick'> <input type='checkbox' class='check' checked> </td><td class='col-md-6 text'> "+ done[i][0] + "</td> <td class='col-md-1 cross'> <button class='close'>&times;</button> </td> </tr>");
		$(".done").append($item);
	}


	$('#add').click(function(){
		if ($('input[name=checkListItem]').val() === ''){
			alert("Input task");
		}
		else{ 
			if($('input[name=checkListLabel]').has('option').length <= 0){
				// TODO add default label
				$('input[name=checkListLabel]').val('Default');
			}
	        var toAdd = [ $('input[name=checkListItem]').val(), $('input[name=checkListLabel]').val()];
	        mg = new manager(toAdd);
	        mg.add();
	        // reload();
	        console.log(todo);
	        $item = $("<tr class='row'> <td class='col-md-5 tick'> <input type='checkbox' class='check'> </td><td class='col-md-6 text'> "+ todo[todo.length-1][0] + "</td> <td class='col-md-1 cross'> <button class='close'>&times;</button> </td> </tr>");
			$(".todo").append($item);
        }
    });

	$('table').on("click","td.cross",function(){
		// if parent.class == .todo{
		// 	remove from todo
		// 	add to done
		// }
		// else{
		// 	remove from done
		// 	add to todo
		// }
		$(this).closest("tr").remove();
	});

	$('table').on("click","td.tick",function(){
		// if parent.class == .todo{
		// 	remove from todo
		// 	add to done
		// }
		// else{
		// 	remove from done
		// 	add to todo
		// }
		console.log("hullo");
		console.log($('#check').prop('checked'));
		if($(this).find('.check').prop('checked') === true) {
			//remove from todo
			//append to done
			var tr = $(this).closest('tr');
			//tr.find("input[type='checkbox']").attr("checked",true);
			tr.detach().appendTo($('.done'));
		}
		else if($(this).find('.check').prop('checked') === false){
			//remove from done
			//append to todo
			var tr = $(this).closest('tr');
			//tr.find("input[type='checkbox']").attr("checked",false);
			tr.detach().appendTo($('.todo'));
		}
	});

	$('#remainder').click(function(){
	    if($(this).prop('checked') === true){
	         // $('#date').attr('display','unset');   
	         // $('#clock').attr('display','unset');  
			$('#date').show();
			$('#clock').show();
	    }
	    else {
	    	$('#date').hide();
	        $('#clock').hide();
	    }
	});

	
	var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        });
	  
	var input = $('input[name="clock"]');
	input.clockpicker({
	    autoclose: true
	});

});
