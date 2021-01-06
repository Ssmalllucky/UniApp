package com.uniapp.bridge

import android.os.Build
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient

class UniController {

    fun create(webView: WebView) {
        var settings = webView.getSettings()
        settings.apply {
            setJavaScriptEnabled(true)
            setUseWideViewPort(true)
            setLoadWithOverviewMode(true)
            setDomStorageEnabled(true)
            setCacheMode(WebSettings.LOAD_NO_CACHE)
            setDomStorageEnabled(true)
        }
        webView.clearCache(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        webView.setWebViewClient(object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                view.loadUrl(url)
                return true
            }

            override fun onPageFinished(view: WebView, url: String) {
                super.onPageFinished(view, url)
            }
        })

        webView.addJavascriptInterface(this, "JsBridge")
    }

    @JavascriptInterface
    public fun testJS() {

    }
}