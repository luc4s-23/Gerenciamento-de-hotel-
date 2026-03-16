using Hoteis.API.Data;
using Hoteis.API.Repository;
using Hoteis.API.Service;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore; // <-- ADICIONAR ESTE USING

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//builder.Services.AddScoped<IHospedeRepository, HospedeRepository>();
//builder.Services.AddScoped<IHospedeService, HospedeService>();

builder.Services.AddScoped<IQuartoService, QuartoService>();
builder.Services.AddScoped<IQuartoRepository, QuartoRepository>();

// builder.Services.AddScoped<ICategoriaRepository, CategoriaRepository>();
// builder.Services.AddScoped<ICategoriaService, CategoriaService>();

builder.Services.AddScoped<IReservaRepository, ReservaRepository>();
builder.Services.AddScoped<IReservaService, ReservaService>();

var app = builder.Build();

// Program.cs
app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        var error = context.Features.Get<IExceptionHandlerFeature>();
        if (error != null)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                statusCode = 500,
                message = "Ocorreu um erro interno. Tente novamente."
                // Nunca exponha error.Error.Message em produção!
            });
        }
    });
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();