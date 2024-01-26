window.addController = function($scope,$http,$location){
    $scope.title = "Form thêm sinh viên"
    // function xử lí thêm sinh viên

    $scope.addStudent = function(){
    const apistudent = "http://localhost:3000/student";
    
    // Khởi tạo đối tượng chứa dữ liệu gửi lên
    let newStudent ={
        ten : $scope.student.ten,
        tuoi : $scope.student.tuoi,
        lop : $scope.student.lop,
    }
    console.log(newStudent);
    //GỌi api để thêm dữ liệu
    $http.post(apistudent,newStudent)
    .then(function(response){
        if(response.status==201){
            $location.path("trang-chu")
        }
    })
    }
}