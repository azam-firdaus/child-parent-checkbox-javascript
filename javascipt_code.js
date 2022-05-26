 $(document).ready(function() {
            let all_aspek = document.querySelectorAll('*[id^="aspek_"]');
            for(let h=0; h< all_aspek; h++){
                let all_param = document.querySelectorAll('*[id^="parameter_"]');
                let total_param = 0;
                for (let j = 0; j < all_param.length; j++) {
                    const array_param_name = all_param[j].name.split("_");
                    let name_indi = "indikator_" + array_param_name[1];
                    let all_indicator = document.querySelectorAll('*[id^=' + name_indi + ']');
                    let total = 0;
                    for (let i = 0; i < all_indicator.length; i++) {
                        if (all_indicator[i].checked) {
                            total++;
                        }
                    }
                    if (total) {
                        all_param[j].checked = true;
                        total_param++;
                    } else {
                        all_param[j].checked = false;
                    }
                }
        
                if (total_param) {
                    all_aspek[h].checked = true;
                } else {
                    all_aspek[h].checked = false;
                }
            }
        
        });
        
        function myFunction(checkbox) {
            const myArray = checkbox.name.split(".");
            const myArray_2 = myArray[0].split("_");
        
            let param_name = "parameter_" + myArray_2[1];
        
            let param = document.getElementById(param_name);
            let total_param = 0;
            if (checkbox.checked) {
                if (!param.checked) {
                    param.checked = true;
                }
            }
            const indi_name = "indikator_" + myArray_2[1];
            let all_indicator = document.querySelectorAll('*[id^="' + indi_name + '"]');
            let total = 0;
            for (let i = 0; i < all_indicator.length; i++) {
                if (all_indicator[i].checked) {
                    total++;
                }
            }
            if (total) {
                param.checked = true;
            } else {
                param.checked = false;
            }
        
            const array_param_name = param.name.split("_");
            let aspek_name = "aspek_" + array_param_name[2];
        
            let aspek = document.getElementById(aspek_name);
        
            let param_aspek = "parameter_" + array_param_name[2];
        
            let all_param = document.querySelectorAll('*[id^="' + param_aspek + '"]');
            for (let k = 0; k < all_param.length; k++) {
                if (all_param[k].checked) {
                    total_param++;
                }
            }
        
            if (total_param) {
                aspek.checked = true;
            } else {
                aspek.checked = false;
            }
        }
        
        function myFunction2(checkbox) {
            
            let check_aspek_name = checkbox.name.split("_");
            let param_name = "parameter_" + check_aspek_name[1];
            let all_param = document.querySelectorAll('*[id^="' + param_name + '"]');
            if (checkbox.checked) {
                for (let i = 0; i < all_param.length; i++) {
                    all_param[i].checked = true;
                    myFunction3(all_param[i], 2, 1);
                }
            } else {
                for (let i = 0; i < all_param.length; i++) {
                    all_param[i].checked = false;
                    myFunction3(all_param[i], 2, 0);
                }
            }
        }
        
        function myFunction3(checkbox, status, change) {
            const array_param_name = checkbox.name.split("_");
        
            let aspek_name = "aspek_" + array_param_name[2];
            let aspek = document.getElementById(aspek_name);
        
            let indi_name = "indikator_" + array_param_name[1];
            let all_indicator = document.querySelectorAll('*[id^="' + indi_name + '"]');
            if (status == 1) {
                if (checkbox.checked) {
                    for (let i = 0; i < all_indicator.length; i++) {
                        all_indicator[i].checked = true;
                    }
                    aspek.checked = true;
        
                } else {
                    for (let i = 0; i < all_indicator.length; i++) {
                        all_indicator[i].checked = false;
                    }
        
                    let param_aspek = "parameter_" + array_param_name[2];
        
                    let all_param = document.querySelectorAll('*[id^="' + param_aspek + '"]');
                    let total_pa = 0;
        
                    for (let p = 0; p < all_param.length; p++) {
                        if (all_param[p].checked) {
                            total_pa++;
                        }
                    }
                    if (!total_pa) {
                        aspek.checked = false;
                    }
                }
            } else {
        
                if (change) {
                    for (let i = 0; i < all_indicator.length; i++) {
                        all_indicator[i].checked = true;
                    }
        
                } else {
                    for (let i = 0; i < all_indicator.length; i++) {
                        all_indicator[i].checked = false;
                    }
        
                    let param_aspek = "parameter_" + array_param_name[2];
        
                    let all_param = document.querySelectorAll('*[id^="' + param_aspek + '"]');
                    let total_pa = 0;
        
                    for (let p = 0; p < all_param.length; p++) {
                        if (all_param[p].checked) {
                            total_pa++;
                        }
                    }
                    if (!total_pa) {
                        aspek.checked = false;
                    }
                }
            }
        }