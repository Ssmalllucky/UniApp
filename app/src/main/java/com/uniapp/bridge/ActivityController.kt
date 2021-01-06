package com.uniapp.bridge

import androidx.appcompat.app.AppCompatActivity

object ActivityController {

    private val mActivities = ArrayList<AppCompatActivity>()

    fun add(a: AppCompatActivity) {
        mActivities.add(a)
    }

    fun remove(a: AppCompatActivity) {
        mActivities.remove(a)
    }

    fun finishAll() {
        for (a in mActivities) {
            if (!a.isFinishing) {
                a.finish()
            }
        }
        mActivities.clear()
    }
}