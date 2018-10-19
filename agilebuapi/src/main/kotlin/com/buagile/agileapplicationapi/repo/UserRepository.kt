package com.buagile.agileapplicationapi.repo

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import com.buagile.agileapplicationapi.model.Data


@Repository
interface UserRepository : CrudRepository<Data, Long> {

    fun findByUserId(UserId: String): Iterable<Data>
}