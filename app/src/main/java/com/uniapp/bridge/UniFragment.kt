package com.uniapp.bridge

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.fragment.app.Fragment
import com.uniapp.bridge.base.UrlConfig
import kotlinx.android.synthetic.main.f_webview.*
import java.lang.StringBuilder

class UniFragment : Fragment() {

    private lateinit var mRootView: View
    private lateinit var mWebView: WebView

    private lateinit var mController: UniController

    private val mLocalUrlPrefix = "file:///android_asset/"
    private val mLocalUrlFileName = "index.html"

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        mRootView = inflater.inflate(R.layout.f_webview, container, false)
        mWebView = mRootView.findViewById(R.id.wv_container)
        return mRootView
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        mController = UniController()
        mController.create(mWebView)

        buildUrl()

        testBtn.setOnClickListener {
            startActivity(Intent(activity, CaptureAty::class.java))
        }
    }

    private fun buildUrl() {
//        val url = with(StringBuilder()) {
//            append(mLocalUrlPrefix)
//            append(mLocalUrlFileName)
//            toString()
//        }
        mWebView.loadUrl(UrlConfig.BASE_URL)
    }

    internal fun canGoBack(): Boolean {
        return mWebView.canGoBack()
    }

    internal fun goBack() {
        return mWebView.goBack()
    }

    fun onTestClick(view: View) {

    }
}