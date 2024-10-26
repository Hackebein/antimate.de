var REG_OVH = NewRegistrar("ovh");
var DSP_OVH = NewDnsProvider("ovh");

D("antimate.de", REG_OVH, DnsProvider(DSP_OVH),
    // TeamSpeak
    SRV("_ts3._udp", 0, 5, 20101, "ts3server01.antimate.de."),
    A("ts3server01", "5.9.72.186"),
END);
