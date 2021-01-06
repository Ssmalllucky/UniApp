package com.uniapp.bridge

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity

class WelcomeAty : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.aty_welcome)
        ActivityController.add(this)

        Handler().postDelayed({
            startActivity(Intent(this, UniAty::class.java))
        }, 1500)
    }
}