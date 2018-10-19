package com.buagile.agileapplicationapi.model

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType

@Entity
class Data(
        val type: String,
        val data: String,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long = -1) {

    private constructor() : this("", "")
}