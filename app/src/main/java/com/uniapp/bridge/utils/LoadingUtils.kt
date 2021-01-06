package com.uniapp.bridge.utils

import android.app.ProgressDialog
import android.content.Context
import android.widget.ProgressBar

object LoadingUtils {

    var mProgressDialog: ProgressDialog? = null

    fun showLoading(context: Context) = with(ProgressDialog(context)) {
        setMessage("加载中...")
        show()
        mProgressDialog
    }

    fun cancelLoading() = mProgressDialog?.let {
        if (mProgressDialog!!.isShowing!!) {
            it.cancel()
        }
    }
}