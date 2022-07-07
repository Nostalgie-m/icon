var obj = JSON.parse($response.body);

const path1 = "v1/user/show.json";
const path2 = "v1/vip/vip_show.json";
const path3 = "v1/h5/vip/new_sub_detail.json";

if ($request.url.indexOf(path1) != -1) {
	obj = {
	  "degrade": 0,
	  "ret": 0,
	  "error_code": 0,
	  "error": "Ok",
	  "msg": "成功",
	  "data": {
		"uid": 1497457618,
		"mt_num": 0,
		"type": 0,
		"screen_name": "Nostalgie_",
		"core": false,
		"avatar_url": "http://maavatar1.meitudata.com/5b106ba61e33c6123.jpg",
		"gender": "m",
		"birthday": 631123200,
		"country_id": 100000,
		"province_id": 220000,
		"city_id": 220100,
		"fan_count": 3,
		"follower_count": 0,
		"feed_favorites_count": 0,
		"video_favorites_count": 0,
		"favorites_count": 0,
		"desc": "",
		"create_time": 1656411434,
		"last_update_time": 0,
		"is_invited": 0,
		"landmark_count": "0",
		"landmark_ranking": "0",
		"have_unlock_landmark": 0,
		"friendship_status": 0,
		"feed_count": 0,
		"feed_like_count": 0,
		"magazine_count": 0,
		"in_blacklist": 0,
		"age": 32,
		"constellation": "摩羯座",
		"identity_type": 0,
		"identity_status": 0,
		"identity_desc": "",
		"identity_time": 0,
		"portal_type": 0,
		"portal_icon": "",
		"portal_url": "",
		"background_url": "https://xximg1.meitudata.com/6531090534910133249.png",
		"is_preset": 0,
		"be_like_count": 0,
		"be_favorites_count": 0,
		"pendants": [],
		"pendants_content": [],
		"level": 0,
		"show_producer_level": 2,
		"template_feed_count": 0,
		"is_live": 0,
		"has_permission": 0,
		"has_shop_permission": 0,
		"is_authorize": 1,
		"card_item": [],
		"identity_card": "",
		"identity_new_status": 0,
		"identity_schema": "https://titan-h5.meitu.com/xiu-h5/authcard/index.html",
		"vip_type": 1,
		"show_shopping_cart": 0,
		"free_trial": 0,
		"topic_favorite_count": 0,
		"video_template_feed_count": 0
	  }
	};
	$done({body: JSON.stringify(obj)});
}

if ($request.url.indexOf(path2) != -1) {
	obj = {
	  "degrade": 0,
	  "ret": 0,
	  "error_code": 0,
	  "error": "Ok",
	  "msg": "成功",
	  "data": {
		"id": 6950732736404408363,
		"id_str": "6950732736404408363",
		"gid": 2575728709,
		"uid": 1497457618,
		"avatar_url": "http://maavatar1.meitudata.com/5b106ba61e33c6123.jpg",
		"screen_name": "Nostalgie_",
		"platform": 2,
		"is_valid_user": 1,
		"vip_type": 101,
		"sub_type": 3,
		"sub_name": "包年",
		"renew": 2,
		"valid_time": 1657183822,
		"in_valid_time": 2603956591,
		"create_time": 1657183822,
		"sub_biz_type": 1,
		"is_expire": 0,
		"expire_days": -8000,
		"s": 1
	  }
	};
	$done({body: JSON.stringify(obj)});
}

if ($request.url.indexOf(path3) != -1) {
	obj = {
	  "degrade": 0,
	  "ret": 0,
	  "error_code": 0,
	  "error": "Ok",
	  "msg": "成功",
	  "data": {
		"old_vip_type": 4,
		"exchange_vip": 0,
		"uid": 1497457618,
		"screen_name": "Nostalgie_",
		"avatar_url": "http://maavatar1.meitudata.com/5b106ba61e33c6123.jpg",
		"invalid_time": 1657788622,
		"sub_biz_type": 1,
		"vip_type": 101,
		"valid_time": 2603956591,
		"is_expire": 0,
		"expire_days": -8000,
		"renew": 2,
		"platform": 2,
		"new_version_rotograms": {
		  "top_banners": [{
			"banner_id": "6940594183155512739",
			"banner_url": "https://xx1.video.meipai.com/XKGCzwanq9.mp4",
			"scheme": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=vip&active=1&entrance=banner",
			"banner_type": 1,
			"title": "",
			"sub_title": "",
			"vip_rights_name": "高清人像",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6940598038056433207",
			"banner_url": "https://xx1.video.meipai.com/oxDiwjvzm5.mp4",
			"scheme": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=vip&active=2&entrance=banner",
			"banner_type": 1,
			"title": "",
			"sub_title": "",
			"vip_rights_name": "美化素材",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6940598347092751932",
			"banner_url": "https://xx1.video.meipai.com/RJZt9jpRBP.mp4",
			"scheme": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=vip&active=3&entrance=banner",
			"banner_type": 1,
			"title": "",
			"sub_title": "",
			"vip_rights_name": "相机特效",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6940598632242509376",
			"banner_url": "https://xx1.video.meipai.com/d08ibER5Ll.mp4",
			"scheme": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Ftool%2Fip-planets%2Findex.html%3Fentrance%3Dnewpro",
			"banner_type": 1,
			"title": "",
			"sub_title": "",
			"vip_rights_name": "海量IP",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }],
		  "operating_banners": [],
		  "beauty_banners": [{
			"banner_id": "6818026975159156610",
			"banner_url": "https://xximg1.meitudata.com/pKJUZBaLqn.png",
			"scheme": "meituxiuxiu://meirong/facefill",
			"banner_type": 3,
			"title": "面部丰盈",
			"sub_title": "照片界的热玛吉",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6818028110540463426",
			"banner_url": "https://xximg1.meitudata.com/k5wfOzwwxk.jpeg",
			"scheme": "meituxiuxiu://meirong/skinWhitening",
			"banner_type": 3,
			"title": "新·肤色功能",
			"sub_title": "仿若全身粉底液",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6818029528240374535",
			"banner_url": "https://xximg1.meitudata.com/lklTkRG9NN.jpeg",
			"scheme": "meituxiuxiu://meirong/wrinkle",
			"banner_type": 3,
			"title": "医美级去皱",
			"sub_title": "轻松隐年龄",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6818025728037379968",
			"banner_url": "https://xximg1.meitudata.com/g1DFOxzdVw.png",
			"scheme": "meituxiuxiu://meirong/orthodon?id=1",
			"banner_type": 3,
			"title": "整齐牙齿",
			"sub_title": "Get完美露齿照",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6818028701081693410",
			"banner_url": "https://xximg1.meitudata.com/DEpIK8QlEY.png",
			"scheme": "meituxiuxiu://meirong/densehair/bang",
			"banner_type": 3,
			"title": "一键换刘海",
			"sub_title": "发际线无忧",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }, {
			"banner_id": "6856863394786728565",
			"banner_url": "https://xximg1.meitudata.com/OXpt0EVeVe.jpeg",
			"scheme": "meituxiuxiu://meirong/matte?type=0",
			"banner_type": 3,
			"title": "去油光功能",
			"sub_title": "皮肤头发一键去油",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "",
			"color": ""
		  }],
		  "entrance_banners": [{
			"banner_id": "6940949892888024236",
			"banner_url": "https://xximg1.meitudata.com/EkmTWRJOvB.png",
			"scheme": "meituxiuxiu://miniapp?app_id=Membership&showNav=0&title=member&route=student&entrance=function_card_student",
			"banner_type": 4,
			"title": "学生特惠",
			"sub_title": "14-24岁",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "function_card_student",
			"color": "FFF"
		  }, {
			"banner_id": "6940950942932030712",
			"banner_url": "https://xximg1.meitudata.com/l2XUgYVKQN.png",
			"scheme": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Fxiuxiu-vip-related%2Fwelfare-center%2Findex.html%3Fentrance%3Dvip_page",
			"banner_type": 4,
			"title": "福利中心",
			"sub_title": "粉钻会员专属",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "function_card_weal",
			"color": "FFF"
		  }, {
			"banner_id": "6940945499820151749",
			"banner_url": "https://xximg1.meitudata.com/yWxfWvBD2P.png",
			"scheme": "meituxiuxiu://miniapp?app_id=Membership&showNav=0&title=member&route=gift_card&entrance=function_card_gift",
			"banner_type": 4,
			"title": "礼品卡",
			"sub_title": "“美”有礼由",
			"vip_rights_name": "",
			"vip_right_id": "",
			"tag": "function_card_gift",
			"color": "FFF"
		  }]
		},
		"desc": "",
		"new_login_add_vip_type": 0,
		"is_new_vipsub": 0,
		"sub_type": 3,
		"s": 1,
		"vip_function_num": 30,
		"new_material_num": 0,
		"prices": [{
		  "sub_id": "6917712101800963397",
		  "sub_biz_type": 1,
		  "sub_type": 1,
		  "user_type": 0,
		  "renew": 2,
		  "sub_name": "连续包月",
		  "first_price": 2000,
		  "price": 2000,
		  "discount_value": 2800,
		  "original_price": 4800,
		  "product_id": "com.meitu.mtxx.autorenew.vip36",
		  "sale_text": "不到1杯奶茶钱",
		  "promotional_type": 0,
		  "title": "￥20.00/月",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "agreement_desc": "到期自动续费￥20.00/月, 可随时取消",
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥20.00/月, 可随时取消",
		  "day_price": "￥0.67/天",
		  "only_day_price": "0.67",
		  "currency": "￥",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}, {
		  "sub_id": "6917712105294818673",
		  "sub_biz_type": 1,
		  "sub_type": 3,
		  "user_type": 0,
		  "renew": 2,
		  "sub_name": "连续包年",
		  "first_price": 16800,
		  "price": 16800,
		  "discount_value": 19000,
		  "original_price": 35800,
		  "product_id": "com.meitu.mtxx.autorenew.vip38",
		  "sale_text": "最划算",
		  "promotional_type": 0,
		  "title": "￥168.00/年",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "agreement_desc": "到期自动续费￥168.00/年, 可随时取消",
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥168.00/年, 可随时取消",
		  "day_price": "￥0.46/天",
		  "only_day_price": "0.46",
		  "currency": "￥",
		  "month_price": "￥14.00/月",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}, {
		  "sub_id": "6917712102434303307",
		  "sub_biz_type": 1,
		  "sub_type": 2,
		  "user_type": 0,
		  "renew": 2,
		  "sub_name": "连续包季",
		  "first_price": 5000,
		  "price": 5000,
		  "discount_value": 7800,
		  "original_price": 12800,
		  "product_id": "com.meitu.mtxx.autorenew.vip37",
		  "sale_text": "",
		  "promotional_type": 0,
		  "title": "￥50.00/季",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "agreement_desc": "到期自动续费￥50.00/季, 可随时取消",
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥50.00/季, 可随时取消",
		  "day_price": "￥0.56/天",
		  "only_day_price": "0.56",
		  "currency": "￥",
		  "month_price": "￥16.67/月",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}, {
		  "sub_id": "6917712020301441461",
		  "sub_biz_type": 1,
		  "sub_type": 1,
		  "user_type": 0,
		  "renew": 1,
		  "sub_name": "1个月",
		  "first_price": 3000,
		  "price": 3000,
		  "discount_value": 1800,
		  "original_price": 4800,
		  "product_id": "com.meitu.mtxx.nonrenew.vip8",
		  "sale_text": "",
		  "promotional_type": 0,
		  "title": "1个月￥30.00",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥30.00/月, 可随时取消",
		  "day_price": "￥1/天",
		  "only_day_price": "1",
		  "currency": "￥",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}, {
		  "sub_id": "6917712020473407928",
		  "sub_biz_type": 1,
		  "sub_type": 2,
		  "user_type": 0,
		  "renew": 1,
		  "sub_name": "3个月",
		  "first_price": 7800,
		  "price": 7800,
		  "discount_value": 5000,
		  "original_price": 12800,
		  "product_id": "com.meitu.mtxx.nonrenew.vip9",
		  "sale_text": "",
		  "promotional_type": 0,
		  "title": "3个月￥78.00",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥78.00/季, 可随时取消",
		  "day_price": "￥0.87/天",
		  "only_day_price": "0.87",
		  "currency": "￥",
		  "month_price": "￥26.00/月",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}, {
		  "sub_id": "6917712071362898998",
		  "sub_biz_type": 1,
		  "sub_type": 3,
		  "user_type": 0,
		  "renew": 1,
		  "sub_name": "12个月",
		  "first_price": 22800,
		  "price": 22800,
		  "discount_value": 13000,
		  "original_price": 35800,
		  "product_id": "com.meitu.mtxx.nonrenew.vip10",
		  "sale_text": "",
		  "promotional_type": 0,
		  "title": "12个月￥228.00",
		  "type": 1,
		  "exchange_days": 0,
		  "curr_time": 1657184940,
		  "top_price_desc": "",
		  "lt3_price_size_title": "",
		  "lt3_price_size_attach_title": "",
		  "lt3_price_size_title_first_place": "",
		  "lt3_price_size_attach_title_first_place": "",
		  "money_unit": "￥",
		  "money_code": "CNY",
		  "is_activity_price": 0,
		  "btn_title": "立即订阅",
		  "oversea_agreement_desc": "到期自动续费￥228.00/年, 可随时取消",
		  "day_price": "￥0.62/天",
		  "only_day_price": "0.62",
		  "currency": "￥",
		  "month_price": "￥19.00/月",
		  "buy_vip_send_days": 0,
		  "price_delete_flag": 0,
		  "red_amount": 0,
		  "renew_sign_mode": 0
		}],
		"vip_power_num": 17,
		"welfare_center_num": 19,
		"new_power_num": 290,
		"vip_power_jump_url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&entrance=vip_privilege",
		"welfare_center_jump_url": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Fxiuxiu-vip-related%2Fwelfare-center%2Findex.html%3Fentrance%3Dvip_page",
		"new_power_num_jump_url": "meituxiuxiu://materialcenter?id=-2",
		"xx_vip": {
		  "sub_type": 3,
		  "renew": 1,
		  "valid_time": 1657183822,
		  "in_valid_time": 1657788622,
		  "is_expire": 0,
		  "expire_days": -8,
		  "s": 0
		},
		"hbp_vip": {
		  "sub_type": 3,
		  "renew": 2,
		  "valid_time": 1657183822,
		  "in_valid_time": 1657788622,
		  "is_expire": 0,
		  "expire_days": -8,
		  "s": 0
		},
		"rights_page_vip_btn_title": "立即续费",
		"rights_page_svip_btn_title": "立即续费",
		"vip_sign_info": {
		  "show_auto_renew": 1,
		  "next_withhold_date": "2022-07-14",
		  "next_withhold_amount": 16800,
		  "withhold_currency_symbol": "¥",
		  "pay_channel": "苹果支付",
		  "sub_type": 3,
		  "renew_status": 1
		}
	  }
	};
	$done({body: JSON.stringify(obj)});
}
