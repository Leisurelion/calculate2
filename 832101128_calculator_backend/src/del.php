<?php

    $con = mysqli_connect('localhost','root','','rnjry6cog3');

    if($con)
    {
        //设置编码格式

        $sql = "DELETE FROM `wx` WHERE 1";

        $result=mysqli_query($con,$sql);

   

    }
    else
    {
        echo '连接数据库失败';
    }

?>
