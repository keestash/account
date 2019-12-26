import $ from 'jquery';
import Formula from "../../../../../lib/js/src/Formula";

(function () {
    if (!Keestash.Security) {
        Keestash.Security = {};
    }
    Keestash.Security = {

        init: function () {
            let formula = new Formula();


            $("#tl__security__password__form").submit(function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                let userId = $("#tl__sc__user__id").val();
                let currentPassword = $("#tl__sc__current__password").val();
                let password = $("#tl__sc__password").val();
                let passwordRepeat = $("#tl__sc__password__repeat").val();

                let values = {};
                values["user_id"] = userId;
                values["current_password"] = currentPassword;
                values["password"] = password;
                values["password_repeat"] = passwordRepeat;

                formula.post(
                    Keestash.Main.getApiHost() + "/security/password/update/"
                    , values
                    , function (response, status, xhr) {
                        alert("updated!");
                    }
                    , function (response, status, xhr) {
                        alert("error");
                    }
                );

            });

        }
    }
})();
$(document).ready(function () {
    Keestash.Security.init();
});