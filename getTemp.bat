@echo off

rem wmic temperature get CurrentReading

rem wmic /namespace:\\root\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature

rem wmic /namespace:\\root\wmi PATH Win32_TemperatureProbe get CurrentReading

rem wmic /namespace:\\root\cimv2 PATH Win32_PerfFormattedData_Counters_ThermalZoneInformation get Temperature

for /f "delims== tokens=2" %%a in (
    'wmic /namespace:\\root\cimv2 PATH Win32_PerfFormattedData_Counters_ThermalZoneInformation get Temperature /value'
) do (
    set /a degrees_celsius=%%a - 273
)

echo %degrees_celsius%
