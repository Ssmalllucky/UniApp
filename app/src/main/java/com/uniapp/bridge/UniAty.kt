package com.uniapp.bridge

import android.os.Bundle
import android.view.KeyEvent
import androidx.fragment.app.FragmentActivity
import es.dmoral.toasty.Toasty

class UniAty : FragmentActivity() {

    private var mLastClickTime = 0L
    private val mClickInterval = 1000

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ActivityController.add(this)
        setContentView(R.layout.aty_uni)
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {

            if (caoGoBack()) {
                goBack()
                return false
            }

            if (mLastClickTime == 0L || System.currentTimeMillis() - mLastClickTime > mClickInterval) {
                mLastClickTime = System.currentTimeMillis()
                Toasty.info(this, "再次返回以退出应用。").show()
            } else {
                ActivityController.finishAll()
            }
            return false

        }
        return super.onKeyDown(keyCode, event)
    }

    fun getFragment(): UniFragment {
        return supportFragmentManager.findFragmentById(R.id.f_container) as UniFragment
    }

    fun caoGoBack(): Boolean {
        val mChildFragment = getFragment()
        return mChildFragment?.run {
            return mChildFragment.canGoBack()
        }
    }

    fun goBack() {
        val mChildFragment = getFragment()
        mChildFragment.goBack()
    }
}