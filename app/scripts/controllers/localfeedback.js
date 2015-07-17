'use strict';

angular.module('roboBrainApp')
  .controller('localFeedbackCtrl',['$scope','$rootScope','ENV','$location',function ($scope,$rootScope,ENV,$location) {
    
  	$scope.pedicateList=[
    {id:'moveto',name:'move'},
    {id:'grasp',name:'grasp'},
    {id:'release',name:'release'},
    {id:'turn',name:'turn'},
    {id:'open',name:'open'},
    {id:'close',name:'close'},
    {id:'wait',name:'wait'},
    {id:'scoop',name:'scoop'},
    {id:'place',name:'place'},
    {id:'add',name:'add'},
    {id:'pour',name:'pour'},
    {id:'squeeze',name:'squeeze'},
    {id:'press',name:'press'},
    {id:'insert',name:'insert'},
    {id:'keep',name:'keep'},
    ];
    $scope.objectList=[
    {id:'Pillow_1',name:'Pillow_1'},
    {id:'Bed_1', name:'Bed_1'},
    {id:'Pillow_2',name:'Pillow_2'}
    ];
    $scope.subjectList=[
     {id:'Pillow_1',name:'Pillow_1'},
    {id:'Bed_1', name:'Bed_1'},
    {id:'Pillow_2',name:'Pillow_2'}
    ];

    $scope.preposition=[
    {id:'On',name:'On'},
    {id:'of', name:'of'},
    {id:'near',name:'near'}
    ];

    $scope.envName="";
     $scope.instructionSet = [];
$scope.getName=function(name)
{
    console.log(name);
    if (name.indexOf('PowerButton') > -1 || name.indexOf('PR2') > -1)
    {
        return name;
    }
    else
    {
        return name.toLowerCase();
    }
}
    $scope.Init=function()
    {
        if (!$rootScope.currentFeedbackId)
        {
            $location.path("/planitDave");
        }

  
		$.getJSON( "http://localhost:6363/gui/initApp/", function( data ) 
        {
         console.log(data);
        });


        var getFeedEndPoint= ENV.graphApiEndpoint+"e2eFeedback/returnById/"

        $.getJSON(getFeedEndPoint,{query:JSON.stringify($rootScope.currentFeedbackId)} , function( data ) 
        {

            $scope.objectList=[];
            $scope.subjectList=[];
            for (var i in data['objList'] )
            {
                var element={};
                element['id']=data['objList'][i];
                element['name']=data['objList'][i];
                $scope.objectList.push(element);
                $scope.subjectList.push(element);
            }
            $scope.$apply();

        var netOutput="";
         for (var i=0;i<data['tellmedaveOutput'].length;i++)
         {
            netOutput=netOutput+data['tellmedaveOutput'][i]+'<br>';
            var actionList=data['tellmedaveOutput'][i].split(" ");

            var arr={}
            if (actionList.length==2)
            {
                arr['predicateVal']=actionList[0];
                arr['objVal']=$scope.getName(actionList[1]);

            }
            else if (actionList.length==2)
            {
                arr['predicateVal']=actionList[0];
                arr['objVal']=$scope.getName(actionList[1]);
                arr['subVal']=$scope.getName(actionList[2]);
                
            }
            else if (actionList.length==4)
            {
                arr['predicateVal']=actionList[0];
                arr['objVal']=$scope.getName(actionList[1]);
                arr['subVal']=$scope.getName(actionList[3]);
                arr['preposition']=actionList[2];
            }
            $scope.instructionSet.push(arr);
            console.log(arr);
           
         }
         $scope.envName=data['envName'];
         $scope.$apply();
         document.getElementById('instructionSeq').innerHTML=netOutput;

        });

    	
    }
    $scope.addEntry=function(val)
    {
    	var newObject = jQuery.extend(true, {}, val);
    	$scope.instructionSet.push(newObject);

    };
    $scope.deleteElement=function(val)
    {
    	$scope.instructionSet.splice(val,1);
    };
    $scope.playTraj=function(val)
    {
        if ($scope.instructionSet[val]['predicateVal']!='moveto')
            return
        var startPos='PR2';
        var endPos=$scope.instructionSet[val]['objVal'];
        for (var i=0;i<val;i++)
        {
            if ($scope.instructionSet[i]['predicateVal']=='moveto')
            {
                startPos=$scope.instructionSet[i]['objVal']
            }
                
        }
        // console.log('Move From',startPos,endPos);
        var envNo=2;
    	var elements = document.getElementsByClassName('playbtns pull-right btn btn-default');
    	for(var i =0; i < elements.length; i++)
		{
		   elements[i].disabled=true;
		}
		document.getElementById('playT').disabled=true;
		document.getElementById('stopT').disabled=false;
		document.getElementById('capT').disabled=true;
		document.getElementById('nextT').disabled=true;
        // console.log($scope.envName)
    	$.getJSON( "http://localhost:6363/gui/playTraj/",{'env':$scope.envName,'startPos':startPos,'endPos':endPos}, function( data ) {
		 
		  });
    }
    $scope.saveSequence=function(val)
    {   
        var insSeq=[];
        for (var i=0;i<$scope.instructionSet.length;i++)
        {
             var str=$scope.instructionSet[i]['predicateVal']+' '+$scope.instructionSet[i]['objVal']
            
            if ( $scope.instructionSet[i]['preposition'])
            {
              str=str+' '+$scope.instructionSet[i]['preposition']   
            }
            if ( $scope.instructionSet[i]['subVal'])
            {
                str=str+' '+$scope.instructionSet[i]['subVal']
            }  
            insSeq.push(str);   
        }
        // console.log(insSeq);

    	$.getJSON( "http://localhost:6363/e2eFeedback/tellmedaveFeedback/",{feedback:JSON.stringify(insSeq),feedId:$rootScope.currentFeedbackId} , function(data) 
        {
		 

		});

    }
    $scope.stopTraj=function()
    {
    	var elements = document.getElementsByClassName('playbtns pull-right btn btn-default');
    	for(var i =0; i < elements.length; i++)
		{
		   elements[i].disabled=false;
		}
		document.getElementById('playT').disabled=false;
		document.getElementById('stopT').disabled=true;
		document.getElementById('capT').disabled=false;
		document.getElementById('nextT').disabled=true;

        $.getJSON( "http://localhost:6363/gui/stopTraj/", function( data ) 
        {
         console.log(data);
        });


    }
    $scope.resumeTraj=function()
    {
    	var elements = document.getElementsByClassName('playbtns pull-right btn btn-default');
    	for(var i =0; i < elements.length; i++)
		{
		   elements[i].disabled=true;
		}
		document.getElementById('playT').disabled=true;
		document.getElementById('stopT').disabled=false;
		document.getElementById('capT').disabled=true;
		document.getElementById('nextT').disabled=true;
        $.getJSON( "http://localhost:6363/gui/resumeTraj/", function( data ) 
        {
         console.log(data);
        });

    }
    $scope.capTraj1=function()
    {
    	var elements = document.getElementsByClassName('playbtns pull-right btn btn-default');
    	for(var i =0; i < elements.length; i++)
		{
		   elements[i].disabled=true;
		}
		document.getElementById('playT').disabled=true;
		document.getElementById('stopT').disabled=true;
		document.getElementById('capT').disabled=true;
		document.getElementById('nextT').disabled=false;
        $.getJSON( "http://localhost:6363/gui/capTraj/",{'feedId':$rootScope.currentFeedbackId},function( data ) 
        {
         console.log(data);
        });

    }
    $scope.capTraj2=function()
    {
    	var elements = document.getElementsByClassName('playbtns pull-right btn btn-default');
    	for(var i =0; i < elements.length; i++)
		{
		   elements[i].disabled=false;
		}
		document.getElementById('playT').disabled=false;
		document.getElementById('stopT').disabled=true;
		document.getElementById('capT').disabled=false;
		document.getElementById('nextT').disabled=true;
        $.getJSON( "http://localhost:6363/gui/capNextTraj/",{'feedId':$rootScope.currentFeedbackId},function( data ) 
        {
         console.log(data);
        });

    }




  }]);
