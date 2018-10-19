package com.buagile.agileapplicationapi.controller

import org.springframework.beans.factory.annotation.Autowired

import com.buagile.agileapplicationapi.repo.UserRepository
import com.buagile.agileapplicationapi.model.Data
import org.springframework.web.bind.annotation.*

@RestController
class WebController {

    @Autowired
    lateinit var repository: UserRepository

    @RequestMapping("/save", method = arrayOf(RequestMethod.POST))
    fun save(@RequestBody data: Data): String {
        repository.save(Data(data.type, data.data))
        return repository.findAll().toString()
    }

    @RequestMapping("/findall")
    fun findAll() = repository.findAll()

    @RequestMapping("findbyUserId/{userId}")
    fun findByUserId(@PathVariable userId: String)
            = repository.findByUserId(userId)

}