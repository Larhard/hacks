#!/usr/bin/irssi

use File::Basename;
use Irssi;
use Gtk2::Notify -init, "Irssi";

my $dirname = dirname(__FILE__);

sub notify {
	my ($server,$msg,$nick,$address) = @_;

	my $notification = Gtk2::Notify->new($nick, $msg, "$dirname/icon.png");
	$notification->show;

	system("aplay -q '$dirname/beep.wav'");
}

Irssi::signal_add_last('message public', \&notify);
Irssi::signal_add_last('message private', \&notify);

