export default function(title, type) {
	uni.hideLoading();
	uni.hideToast();
	uni.stopPullDownRefresh();
	uni.hideNavigationBarLoading();
	if (!title || title == '') return;
	if (type) {
		if (type == 'load') {
			return uni.showLoading({
				title,
				mask: true
			})
		} else { // (type == 'plus')
			if (window) return uni.showToast({
				title,
				duration: 1500,
				icon: 'none'
			});
			return plus.nativeUI.toast(title);
		}
	} else {
		uni.showToast({
			title,
			duration: 1500,
			icon: 'none'
		});
	}
	return;
}
