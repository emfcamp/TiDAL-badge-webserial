export const badges = {
    "generic": {
        "hatchery_url": "hatchery.badge.team",
        "ota_version_url": "ota.badge.team/version/",
    },
    "sha2017": {
        "name": "SHA2017",
        "hatchery_url": "hatchery.badge.team",
        "ota_version_url": "ota.badge.team/version/",
        "flashsize": 16,
        "baudrate": 115200,
        "flash": [
            {"filename": "bootloader.bin", "address": 4096, "name": "bootloader"},
            {"filename": "hackerhotel2019_16MB.bin", "address": 32768, "name": "partition table"},
            {"filename": "ota_data_initial.bin", "address": 53248, "name": "OTA data"},
            {"filename": "sha2017.bin", "address": 65536, "name": "firmware"}
        ]
    },
    "pixel": {
        "name": "Pixel Badge",
        "hatchery_url": "hatchery.badge.team",
        "ota_version_url": "ota.badge.team/version/",
        "flashsize": 4,
        "baudrate": 115200,
        "flash": [
            {"filename": "bootloader.bin", "address": 4096, "name": "bootloader"},
            {"filename": "pixelv1_4MB.bin", "address": 32768, "name": "partition table"},
            {"filename": "ota_data_initial.bin", "address": 53248, "name": "OTA data"},
            {"filename": "firmware.bin", "address": 65536, "name": "firmware"}
        ]
    },
    "tidal": {
        "name": "Pixel Badge",
        "hatchery_url": "2022.badge.emfcamp.org",
        "ota_version_url": "github.com/emfcamp/TiDAL-Firmware/releases/download/latest/",
    },
}