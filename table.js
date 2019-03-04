$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (data) {

            var array = data;
            function createTable() {
                let previousTable = document.getElementById('dynamicTable');
                if (!!previousTable) {
                    previousTable.remove();
                }
                var table = document.createElement('table');
                table.setAttribute('id', 'dynamicTable');
                var header = Object.keys(array[0]);
                var tr = document.createElement('tr');
                header.map((value, index) => {
                    var th = document.createElement('th');
                    th.innerHTML = header[index];
                    th.setAttribute('class', 'tableClass1');
                    th.setAttribute('id', header[index])
                    tr.appendChild(th);
                })
                table.appendChild(tr);
                table.appendChild(tr);

                array.map((value, index1) => {
                    var tr = document.createElement('tr');
                    header.map((value, index2) => {
                        var td = document.createElement('td');
                        td.innerHTML = array[index1][header[index2]];
                        td.setAttribute('class', 'tableClass');
                        tr.appendChild(td);
                    })
                    table.appendChild(tr);
                })


                document.body.appendChild(table);
                addEventsToColumns();
            }
            createTable();



            function addEventsToColumns() {
                var header = Object.keys(array[0]);
                header.map((value, index) => {
                    document.getElementById(header[index]).addEventListener('click', function (event) {
                        console.log(event);
                        sorting(event.target.innerText)
                    })
                })


            }

            let flag = true;
            function sorting(param) {
                array.sort(compare);
                function compare(a, b) {
                    if (a[param] > b[param] && flag)
                        return 1;
                    else
                        return -1;
                }
                flag = !flag;
                createTable();
            }
        }
    })

});