/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

$(function() {
    $('section > form').bind("keypress", function() {
        if (event.keyCode == 13) {
            event.returnValue = false
            $("#title").click().val()

            if (!($('#title').val())) {
                return
            } else {
                str = `
            <li>
                <input type="checkbox" />
                <p onclick="edit(1)">${ $("#title").val() }</p>
                <a href="javascript:;">-</a>
            </li>
                `
                $('.demo-box').append(str)
                $('input').val('')
                $('#todocount').text(($(".demo-box").children().length))
            }

        }

    })
    $('.demo-box').on('click', 'li > a', function() {
        $(this).parent().remove()
        $('#todocount').text(($(".demo-box").children().length))

    })
    $('#donelist').on('click', 'li > a', function() {
        $(this).parent().remove()
        $('#donecount').text(($("#donelist").children().length))
    })
    $('body').on('mousedown', function(event) {
        $("#todolist li input").on('click', function() {
            $.each($("#todolist li"), function(index, value) {
                if ($(value).children(':first').is(":checked")) {
                    $(value).children(':first').parent().clone(true).appendTo("#donelist")
                    $(value).children(':first').parent().remove()
                    $('#todocount').text(($(".demo-box").children().length))
                }
            })
            $("#donelist li input").on('click', function() {

                $.each($("#donelist li"), function(index, value) {

                    if ($(value).children(':first').is(":checked")) {

                    } else {
                        $(value).children(':first').parent().clone(true).appendTo("#todolist")
                        $(value).children(':first').parent().remove()
                        $('#donecount').text(($("#donelist").children().length))
                    }
                })
            })
        })

    })


})