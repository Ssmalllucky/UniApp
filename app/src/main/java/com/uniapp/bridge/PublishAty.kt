package com.uniapp.bridge

import android.os.Bundle
import androidx.fragment.app.FragmentActivity
import com.uniapp.bridge.base.UrlConfig
import com.uniapp.bridge.utils.WebViewUtils
import kotlinx.android.synthetic.main.aty_publish.*

class PublishAty : FragmentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.aty_publish)

        WebViewUtils.set(wvPublish)
        wvPublish.loadUrl(UrlConfig.BASE_URL + UrlConfig.PUBLISH_URL + "?videoUrl=" + intent.getStringExtra("videoUrl"))
    }
}