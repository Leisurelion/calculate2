<?php
$times = $_GET['times']
// 创建连接
$con = mysqli_connect('localhost','root','','rnjry6cog3');

if($con)
    {
        //设置编码格式
        mysqli_query($con,'set names utf8');

        $sql = "SELECT * FROM `wx` WHERE '$times'";

        $result = $con->query($sql);

        // 将查询结果转换为数组
        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row['progress','result'];
            }
        }
        
        // 关闭数据库连接
        $con->close();
        
        // 将数据以JSON格式返回给前端
        echo json_encode($data);
    }
    else
    {
        echo '连接数据库失败';
    }
?>
