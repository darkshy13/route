window.indexController = function($scope, $http){
    $scope.title = 'Đây là trang danh sách nhé'
    //Gắn biến cho linl API
    const apistudent = "http://localhost:3000/student";
    //Sử dụng $http để tương tác với API
    $http.get(apistudent)
    .then(function(response){
        //Kiểm tra obj trả về những gì
        console.log(response);
        // Nếu status =200 (thành công) thì đặt tên cho mảng
        if(response.status==200){
            $scope.listStudent = response.data;
        }
    })
    $scope.deleteStudent = function(id){
        let confirm = window.confirm("Xoá nhé")
        if(confirm){
    const apistudent = "http://localhost:3000/student";
    
            $http.delete(`${apiStudent}/${id}`)
            .then(function (response){
                if(response.status==200){

                }
            })
            .catch(function(error){
                console.error("Bị lỗi không xoá được");
            })
        }
    }

}