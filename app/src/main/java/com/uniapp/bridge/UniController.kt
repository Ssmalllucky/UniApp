package com.uniapp.bridge

import android.content.Intent
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.fragment.app.Fragment
import com.uniapp.bridge.utils.WebViewUtils
import es.dmoral.toasty.Toasty

class UniController(fragment: UniFragment) {

    private var mFragment: Fragment = fragment

    fun create(webView: WebView) {
        WebViewUtils.set(webView).addJavascriptInterface(this, "AndroidFunction")
    }

    @JavascriptInterface
    public fun requestNativeCapture() {
        Log.e("msg", "requestNativeCapture")
        Toasty.info(mFragment.activity!!, "Toast").show()
        mFragment.startActivity(Intent(mFragment.activity, CaptureAty::class.java))
    }
}