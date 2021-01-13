package com.uniapp.bridge

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import kotlinx.android.synthetic.main.aty_capture.*

/**
 * 拍照和视频编辑能力界面
 */
class CaptureAty : BaseAty() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentLayout(R.layout.aty_capture)
    }

    override fun initView() {
    }

    override fun initListener() {
    }

    override fun initPage() {
        initCapture()
    }

    fun initCapture() {
        var pictureBtn = Button(this)
        var pictureDrawable = resources.getDrawable(R.drawable.capture_test, null)
        pictureDrawable.setBounds(0, 0, pictureDrawable.minimumWidth, pictureDrawable.minimumHeight)
        pictureBtn.setCompoundDrawables(null, pictureDrawable, null, null)
        pictureBtn.text = "拍照"
        pictureBtn.compoundDrawablePadding = 8

        captureSelectLl.addView(pictureBtn)

        pictureBtn = Button(this)
        pictureDrawable = resources.getDrawable(R.drawable.capture_test, null)
        pictureDrawable.setBounds(0, 0, pictureDrawable.minimumWidth, pictureDrawable.minimumHeight)
        pictureBtn.setCompoundDrawables(null, pictureDrawable, null, null)
        pictureBtn.text = "摄像"
        pictureBtn.setTextColor(resources.getColor(R.color.white))
        pictureBtn.compoundDrawablePadding = 8

        pictureBtn = Button(this)
        pictureDrawable = resources.getDrawable(R.drawable.capture_test, null)
        pictureDrawable.setBounds(0, 0, pictureDrawable.minimumWidth, pictureDrawable.minimumHeight)
        pictureBtn.setCompoundDrawables(null, pictureDrawable, null, null)
        pictureBtn.text = "上传"
        pictureBtn.setTextColor(resources.getColor(R.color.white))
        pictureBtn.compoundDrawablePadding = 8

        captureSelectLl.addView(pictureBtn)
    }

    fun goToPublish(view: View) {
        val intent = with(Intent()) {
            putExtra("videoUrl", "https://www.baidu.com/")
            setClass(this@CaptureAty, PublishAty::class.java)
        }
        startActivity(intent)
    }
}