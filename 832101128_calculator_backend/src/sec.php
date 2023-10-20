<?php

    $progress=$_GET['result1'];
    $res=$_GET['result2'];


    $con = mysqli_connect('localhost','root','','rnjry6cog3');

    if($con)
    {
        //设置编码格式
        mysqli_query($con,'set names utf8');

        $sql = "insert into wx(progress,result) values('$progress','$res')";

        $result=mysqli_query($con,$sql);

   

    }
    else
    {
        echo '连接数据库失败';
    }

?>
