package com.uniapp.bridge.utils

import android.os.Build
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient

object WebViewUtils {

    fun set(webView: WebView): WebView {
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

        return webView
    }
}