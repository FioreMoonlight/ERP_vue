const api={ 
    'user_add':'/v1806/user/add',
    'user_infor_set':'/restful/set/_account/user',
    'login':'/v1806/user/login',
    'user_list':'/restful/list/_account/user',
    'user_infor':'/restful/get/_account/user',
    'user_add_company':'/restful/add/_account/user_company',
    'company_add':'/restful/add/_company/company',
    'company_list':'/restful/list/_company/company',
    'company_set_infor':'/restful/set/_company/company',
    // 'company_add_staff':'/restful/set/_company/company',
    'user_company_list':'/restful/list/_account/user_company',
    'user_company_inforSet':'/restful/set/_account/user_company',
    'company_infor':'/restful/get/_company/company',
    'link_company_staff_to_user':'/restful/add/_linked/company_staff_to_user',
    'link_add_user_to_company_staff':'/restful/add/_linked/user_to_company_staff',
    'link_list_company_staff_to_user':'/restful/list/_linked/company_staff_to_user',
    'link_list_user_to_company_staff':'/restful/list/_linked/user_to_company_staff',
    'message_company_staff_link':'/restful/add/_message/company_staff_link',
    'message_list_company_staff_link':'/restful/list/_message/company_staff_link',
    'message_del_company_staff_link':'/restful/del/_message/company_staff_link'
};
export default api;
