package com.uniapp.bridge


import android.content.Context
import android.graphics.Color
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.WindowManager
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import com.sheepfold.platform.utils.DisplayUtils
import com.uniapp.bridge.utils.LoadingUtils
import es.dmoral.toasty.Toasty

open abstract class BaseAty : AppCompatActivity() {

    protected lateinit var mContext: Context

    protected lateinit var mBaseContainer: FrameLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mContext = this;

        setAdvancedStatusBar()
        setContentView(R.layout.aty_base)

        mBaseContainer = findViewById(R.id.base_container)
    }

    private fun setAdvancedStatusBar() {
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.statusBarColor = resources.getColor(R.color.theme_color_blue)
    }

    protected fun setStatusBarTranslucent() {
        window.apply {
            clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
            addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
            statusBarColor = Color.TRANSPARENT
            setBackgroundDrawableResource(android.R.color.transparent)
            decorView.systemUiVisibility =
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
        }
    }

    /**
     *
     */
    private fun setStatusBarView() {
        var statusBarHeight = DisplayUtils.getStatusBarHeight(mContext)
        if (statusBarHeight == 0) {
            statusBarHeight = resources.getDimension(R.dimen.dp_status_height).toInt()
        }
    }

    protected fun setContentLayout(contentLayoutId: Int) {

        if (mBaseContainer?.childCount!! > 0) {
            mBaseContainer?.removeAllViews()
        }
        var contentView: View = LayoutInflater.from(this).inflate(contentLayoutId, null)
        mBaseContainer!!.addView(contentView)
        initView()
        initListener()
        initPage()
    }

    protected abstract fun initView()

    protected abstract fun initListener()

    protected abstract fun initPage()

    protected fun showLoading() = LoadingUtils.showLoading(this)

    protected fun cancelLoading() = LoadingUtils.cancelLoading()

    protected fun showSucToast(msg: String) = Toasty.success(mContext, msg).show()

    protected fun showErrorToast(msg: String) = Toasty.error(mContext, msg).show()

    protected fun showInfoToast(msg: String) = Toasty.info(mContext, msg).show()

    fun onBack(mView: View) = onBackPressed()
}