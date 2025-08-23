// 代码生成时间: 2025-08-23 09:30:42
$(document).ready(function() {
    // 文件选择器
    $('#csvUploader').on('change', handleFileSelect);
});

// 处理文件选择事件
function handleFileSelect(event) {
    var files = event.target.files;
    if (files.length === 0) {
        alert("请至少选择一个文件。");
        return;
    }

    // 遍历所有选定的文件
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('text/csv')) {
            alert("文件不是CSV格式：" + f.name);
            continue;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            processCSV(e.target.result);
        };
        reader.readAsText(f);
    }
}

// 处理CSV文件内容
function processCSV(csvString) {
    try {
        // 将CSV字符串转换为二维数组
        var rows = $.csv.toArrays(csvString);
        // 可以在这里添加更多的处理逻辑
        console.log("CSV文件处理结果：", rows);
    } catch (error) {
        console.error("处理CSV时发生错误：", error);
        alert("处理CSV文件时出错。");
    }
}

// 引用jQuery.CSV插件
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.min.js"></script>
