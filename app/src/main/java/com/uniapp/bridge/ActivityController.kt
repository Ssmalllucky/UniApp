package com.uniapp.bridge

import androidx.fragment.app.FragmentActivity

object ActivityController {

    private val mActivities = ArrayList<FragmentActivity>()

    fun add(a: FragmentActivity) {
        mActivities.add(a)
    }

    fun remove(a: FragmentActivity) {
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