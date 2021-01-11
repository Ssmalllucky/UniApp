package com.uniapp.bridge

import android.app.Application

class UniApp : Application() {

    override fun onCreate() {
        super.onCreate()
        com.aliyun.vod.common.httpfinal.QupaiHttpFinal.getInstance().initOkHttpFinal();
    }
}