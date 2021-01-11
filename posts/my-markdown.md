---
title: 'Lab: Creating virtual machines'
date: '2021-01-11'
---

# Lab: Creating virtual machines

Notice that you can't change the machine type, the CPU platform, or the zone.

You can add network tags and allow specific network traffic from the internet through firewalls.

Some properties of a VM are integral to the VM, are established when the VM is created, and cannot be changed. Other properties can be edited. You can add additional disks and you can also determine whether the boot disk is deleted when the instance is deleted. Normally the boot disk defaults to being deleted automatically when the instance is deleted. But sometimes you will want to override this behavior. This feature is very important because you cannot create an image from a boot disk when it is attached to a running instance. So you would need to disable Delete boot disk when instance is deleted to enable creating a system image from the boot disk.

Windows VM password

```bash
student_00_14bf06da9
nm)s%@i/9dFX(P8
```

Linux VM Commands 

```bash
# used memory
free

# RAM
sudo dmidecode -t 17

# processors
nproc

# details about the CPUs
lscpu
```