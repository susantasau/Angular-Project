﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIAngular.Models;

namespace APIAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationsController : ControllerBase
    {
        private readonly AngularApiContext _context;

        public RegistrationsController(AngularApiContext context)
        {
            _context = context;
        }

        // GET: api/Registrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Registration>>> GetRegistrations()
        {
          if (_context.Registrations == null)
          {
              return NotFound();
          }
            return await _context.Registrations.ToListAsync();
        }

        [HttpGet("data/{id}")]
        public async Task<ActionResult<Registration>> GetRegistration(int id)
        {
            if (_context.Registrations == null)
            {
                return NotFound();
            }
            var registration = await _context.Registrations.FindAsync(id);

            if (registration == null)
            {
                return NotFound();
            }

            return registration;
        }

        // GET: api/Registrations/5
        [HttpGet("UserName/{user}")]
        public async Task<ActionResult<Registration>> GetOneData(string user)
        {
          if (_context.Registrations == null)
          {
              return NotFound();
          }
            var registration = await _context.Registrations.SingleAsync<Registration>(x=>x.User_Name==user);

            if (registration == null)
            {
                return NotFound();
            }

            return registration;
        }

        // PUT: api/Registrations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegistration(int id, Registration registration)
        {
            if (id != registration.Id)
            {
                return BadRequest();
            }

            _context.Entry(registration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Registrations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Registration>> PostRegistration(Registration registration)
        {
          if (_context.Registrations == null)
          {
              return Problem("Entity set 'AngularApiContext.Registrations'  is null.");
          }
            _context.Registrations.Add(registration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegistration", new { id = registration.Id }, registration);
        }

        // DELETE: api/Registrations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegistration(int id)
        {
            if (_context.Registrations == null)
            {
                return NotFound();
            }
            var registration = await _context.Registrations.FindAsync(id);
            if (registration == null)
            {
                return NotFound();
            }

            _context.Registrations.Remove(registration);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegistrationExists(int id)
        {
            return (_context.Registrations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
